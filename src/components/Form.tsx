
const items=[{"id":1,"name":"kris"},
    {"id":2,"name":"monkey"}
]
const Form = () => {
  return (
    <>
    <ul>
        {items.map(item=> <li key={item.id}>{item.name}</li>)}
    </ul>
    </>
  )
}

export default Form