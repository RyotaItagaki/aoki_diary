import { getList, getDetail } from '../lib/posts';

describe('記事一覧が取得できる', () => {
  test('totalcountが2である', async () => {
    // 実行
    const result = await getList();
    // 検証
    expect(result.totalCount).toBe(2);
  });

  test('contentsの0番目の要素のtitleが「テストタイトル」である', async () => {
    // 実行
    const result = await getList();
    // 検証
    expect(result.contents[0].title).toBe('テストタイトル');
  });

  test('contentsの1番目のcreatedAtが「2022-11-22T02:08:46.165Z」である', async () => {
    // 実行
    const result = await getList();
    // 検証
    expect(result.contents[1].createdAt).toBe('2022-11-22T02:08:46.165Z');
  });
});

describe('記事詳細が取得できる', () => {
  test('コンテンツIDがgrwejo0vc5ayのtitleが「テストタイトル」である', async () => {
    // 実行
    const result = await getDetail('grwejo0vc5ay');
    // 検証
    expect(result.title).toBe('テストタイトル');
  });
});
