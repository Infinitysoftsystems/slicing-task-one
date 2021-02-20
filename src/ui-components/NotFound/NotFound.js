import notfound from '../../assets/img/notfound.png';

//this is a dummy page if someone access wrong url. They will be shown a 404 page.
const NotFound = () => {
    return (
        <img width="100%" height="100%" src={notfound} />
    );
}

export default NotFound;