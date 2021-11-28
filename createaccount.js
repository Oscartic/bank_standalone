const CreateAccount= () => {

    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const context = React.useContext(UserContext);
  
    const validate = (field, label) => {
        if(!field) {
            setStatus(`Error: ${label}`);
            setTimeout(() => setStatus(''), 3000);
            return alert(`The field ${label} cannot be empty!`);
        }
        if(label === 'password'){
            if(field.length < 8){
                return alert(`The field ${label} must be at least 8 characters long`);
            }
        }
        return true;
    }
  
    const handleCreate = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        if(!validate(name, 'name')) return;
        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;
        context.users.push({name, email, password, balance:100, session:false});
        setShow(false);
    }

    const clearForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    const enableField = () => {
        if(name === '' && email === '' && password === '') return true;
        return false;
      }

    return(
    <div className="container-fluid">
    <div className="row">
        <div className="col">
        <div style={{ maxWidth:'450px', margin: 'auto', padding:'1em'}}>
        <h1>Create Account</h1>
        <Card
            bgcolor="primary"
            txtcolor="white"
            status={status}
            header="Create Account"
            body={show ? (
                <>
                    Nane:<br />
                    <input 
                        type="input"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={e => setName(e.currentTarget.value)}
                    /><br />
                    Email address:<br />
                    <input 
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                    /><br />
                    Password:<br />
                    <input 
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                    /><br />
                    <button 
                        type="submit" 
                        className="btn btn-outline-danger" 
                        onClick={(e) => handleCreate(e)}
                        disabled={enableField()}
                    >
                        Create Account
                    </button>
                </>
                ) : (
                    <>
                        <h5>Success</h5>
                        <button type="submit" className="btn btn-outline-danger" onClick={clearForm}>Create Account</button>
                    </>)
                }
            />
            </div>
        </div>
        </div>
    </div>
    )
}