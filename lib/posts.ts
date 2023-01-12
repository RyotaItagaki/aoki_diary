import { createClient } from 'microcms-js-sdk';
import { Content } from '../types';

const client = createClient({
  serviceDomain: 'ita-cms',
  apiKey: '57c3d0f9f8ae46e3b5db963bd07c4063d7c2',
});

// 記事一覧
export const getList = async () => {
  const data = await client.getList<Content>({
    endpoint: 'blogs',
  });

  return data;
};

// 記事詳細
export const getDetail = async (contentId: string) => {
  const data = await client.get<Content>({
    endpoint: 'blogs',
    contentId,
  });

  return data;
};
