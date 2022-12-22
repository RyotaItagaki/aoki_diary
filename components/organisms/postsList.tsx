import PostLink from '../molcules/postLink';
import { Content } from '../../types';

const PostsList = (props: { contents: Content[] }) => {
  const { contents } = props;

  return (
    <div className="w-9/12 my-8 mx-auto grid grid-cols-3 gap-4">
      {contents.map((ele) => (
        <PostLink key={ele.id} content={ele} />
      ))}
    </div>
  );
};

export default PostsList;
