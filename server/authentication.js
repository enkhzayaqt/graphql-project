export function handleLogin(req, res){
    console.log(req.body);
    res.json({token: "Hello"})
}