import { apiClient } from '@/shared/api/base';
import type { SlopeResponse } from '../model';

export const getSlope = async (resortId: number): Promise<SlopeResponse> => {
  const result = await apiClient.get<SlopeResponse>(`/api/slopes/${resortId}`);

  return result;
};