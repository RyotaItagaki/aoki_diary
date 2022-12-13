import PostLink from './postLink';

const PostsList = () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="w-9/12 my-8 mx-auto grid grid-cols-3 gap-4">
      {testArray.map((ele) => (
        <PostLink key={ele} />
      ))}
    </div>
  );
};

export default PostsList;
