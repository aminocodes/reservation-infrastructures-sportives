////// this code was in Adminpage 


/* const reservationsDemandes = reservations.filter((reservation) => {
    return reservation.status == 0
}) */
/* constructor(props) {
super(props)
this.state = {}
}

componentDidMount() {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    axios.get('users/me', config).then(
        res => {
            this.setState({
                user: res.data
            })
        },
        err => {
            console.log(err)
        }
    )
}

render() {
    if (this.state.user) {
        return (
            <h2>Hi {this.state.user.username}</h2>
        )
    }

    return (
        <h2>Hi</h2>
    )
} */