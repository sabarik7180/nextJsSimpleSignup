
export function GET(){
    return new Response( JSON.stringify({
        email: 'sabarik@gmail.com', 
        name: 'ElPhenomina',
    }), 
    {
        headers: { 'Content-Type': 'application/json' }
    })
}