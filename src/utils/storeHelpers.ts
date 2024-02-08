import type { IPaginationData, IPaginationForceRefetch, IPaginationSerializeQueryArgs } from './interfaces/IStoreHelpers';
import type { TClearDataOnError } from './interfaces/TClearDataOnError';

export const paginationMergeById = <T extends { id: number }>
  (currentData: IPaginationData<T>, newData: IPaginationData<T>) => {
  // clear old cache if we are on the first page
  if (newData?.meta?.currentPage === 1) {
    return newData;
  }
  const duplicates = newData.data.filter((item) => currentData.data.some((i) => i.id === item.id));
  const newDataWithoutDuplicates = newData.data
    .filter((item) => !duplicates.some((doubleItem) => doubleItem.id === item.id));

  const newAllData = currentData.data.map((item) => {
    const duplicateItem = duplicates.find((i) => i.id === item.id);
    return duplicateItem || item;
  }).concat(newDataWithoutDuplicates);

  const mergedData = {
    ...currentData,
    data: newAllData,
    meta: {
      ...currentData.meta,
      ...newData.meta,
    },
  };

  return mergedData;
};

export const paginationMerge = <T>(currentData: IPaginationData<T>, newData: IPaginationData<T>) => {
  const mergedData = currentData;
  // clear old cache if we are on the first page
  if (newData?.meta?.currentPage === 1) {
    return newData;
  }
  mergedData.data.push(...newData.data);
  mergedData.meta = {
    ...mergedData.meta,
    ...newData.meta,
  };
  return mergedData;
};

export const paginationSerializeQueryArgs = ({ endpointName, queryArgs }: IPaginationSerializeQueryArgs) => {
  const { page, ...other } = queryArgs;
  return `${endpointName}(${JSON.stringify(other)})`;
};

export const paginationForceRefetch = ({ currentArg, previousArg }: IPaginationForceRefetch) => {
  return currentArg?.page !== previousArg?.page;
};

export const clearDataOnError = async (arg:unknown, { queryFulfilled, updateCachedData } :TClearDataOnError) => {
  try {
    await queryFulfilled;
  } catch (e) {
    updateCachedData(() => null);
  }
};
