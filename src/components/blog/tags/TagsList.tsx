import Tag from './Tag';

const TagsList = (props: {
    tags: string[];
    icon?: boolean;
    onRemove?: (tag: string) => void;
    onClick?: (tag: string) => void;
}) => {
    return (
        <div className='flex flex-row flex-wrap items-center'>
            {props.icon && (
                <i className='bx bx-tag text-lg text-slate-400 sm:pl-2'></i>
            )}
            {props.tags.map((tag: string) => {
                return (
                    <Tag
                        key={tag}
                        tag={tag}
                        onRemove={props.onRemove}
                        onClick={props.onClick}
                    ></Tag>
                );
            })}
        </div>
    );
};
export default TagsList;
