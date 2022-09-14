

export default function Auth() {
        if (localStorage.getItem('token')) return true;
        return false;

}
