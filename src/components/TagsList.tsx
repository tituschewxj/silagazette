import Tag from './Tag';

const TagsList = (props: {
    tags: string[];
    onRemove?: (tag: string) => void;
}) => {
    return (
        <div className='mt-2 flex flex-row'>
            {props.tags.map((tag: string) => {
                return (
                    <Tag key={tag} tag={tag} onRemove={props.onRemove}></Tag>
                );
            })}
        </div>
    );
};
export default TagsList;
