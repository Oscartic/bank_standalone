const Card = ({header, title, text, body, status, bgcolor, txtcolor}) => {

    const classes = () => {
        const bg = bgcolor ? ` bg-${bgcolor}` : ''; 
        const txt = txtcolor ? ` text-${txtcolor}` : ' text-white';
        return `card mb-3 ${bg} ${txt}`;   
    }

    return (
        <div className="card" style={{maxWidth: "600px"}}>
            <div className="card-header">
                {header}
            </div>
            <div className="card-body">
                <h5 className="card-title">{title && (<strong className="card-title">{title}</strong>)}</h5>
                <p className="card-text">
                    {text && (<p className="card-text">{text}</p>)}
                    {body}
                    {status && (<div className="createStatus">{status}</div>)}
                </p>
            </div>
        </div>
    )
}
