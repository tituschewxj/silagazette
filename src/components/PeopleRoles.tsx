import { Person } from '@/types/Person';
import LinkText from './LinkText';

/**
 * Renders the a cell like output of the position in bold, followed by the names of the people with that position.
 *
 * @param props Contains the position, and people names.
 */
const PeopleRoles = (props: {
    position: string;
    people: string[] | Person[];
}) => {
    return (
        <div className='text-center'>
            <div className='font-semibold text-slate-800'>{props.position}</div>
            {props.people &&
                props.people.map((person, idx) => {
                    if (typeof person == 'string') {
                        return (
                            <div
                                key={idx.toString()}
                                className='text-slate-600'
                            >
                                {person}
                            </div>
                        );
                    } else {
                        return (
                            <div key={idx.toString()}>
                                <LinkText
                                    text={person.name}
                                    link={person.profile_link}
                                    new_tab
                                    className='text-slate-600'
                                ></LinkText>
                            </div>
                        );
                    }
                })}
        </div>
    );
};

export default PeopleRoles;
