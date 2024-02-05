// http://localhost:3000/api/users


const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function GET(request:any) {
    // return new Response('Hello, Next Js');
    // GET request for /api/users
    const users = [
        {id : 1, name: 'John'},
        {id : 2, name: 'Jane'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'David'},
    ];

    await delay(6000);
    return new Response(JSON.stringify(users));
}