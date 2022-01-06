const getDates = () => {
    let date = new Date();
    let json = date.toJSON();
    return json.slice(0, 10);
}

export default getDates
