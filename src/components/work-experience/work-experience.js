import './work-experience.scss';

function WorkExperience({
    company,
    role,
    startYear,
    endYear,
    description
}) {
    const isCurrent = endYear === 'Now';

    return (
        <article className={`work-experience-container${isCurrent ? ' current' : ''}`}>
            <span className='work-experience-period'>{startYear}-{endYear}</span>
            <div className='work-experience-body'>
                <span className='work-experience-company'>
                    {company}
                    {isCurrent && <span className='work-experience-badge'>Current</span>}
                </span>
                {role && <span className='work-experience-role'>{role}</span>}
                <span className='work-experience-description'>{description}</span>
            </div>
        </article>
    );
}

export default WorkExperience;
