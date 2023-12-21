import Tag from './Tag';

const TagsList = (props: { tags: string[] }) => {
    return (
        <div className='mt-2 flex flex-row'>
            {props.tags.map((tag: string) => {
                return (
                    // TODO: Search by tags
                    <Tag key={tag} tag={tag}></Tag>
                );
            })}
        </div>
    );
};
export default TagsList;
