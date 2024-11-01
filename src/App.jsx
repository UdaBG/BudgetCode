
import Header from './components/header';
import Hero from './components/hero';
import HeadlineCard from './components/headlineCardArea';
import Button from './components/button';
import { useState } from 'react';
import DisplayCategories from './components/DisplayCategories';






function App() {



  const data = [
    {
      id: 1,
      name: 'Double Cheeseburger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
      price: '$$$$',
    },
    {
      id: 2,
      name: 'Bacon Cheeseburger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
      price: '$',
    },
    {
      id: 3,
      name: 'Mushroom Burger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
      price: '$$',
    },
    {
      id: 4,
      name: 'Loaded Burger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
      price: '$$$',
    },
    {
      id: 5,
      name: 'Feta & Spinnach',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$',
    },
    {
      id: 6,
      name: 'Supreme Pizza',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
    {
      id: 7,
      name: 'Meat Lovers',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: '$$$$',
    },
    {
      id: 8,
      name: 'Cheese Pizza',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$',
    },
    {
      id: 9,
      name: 'Kale Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$',
    },
    {
      id: 10,
      name: 'Ceasar Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
    {
      id: 11,
      name: 'Loaded Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$$',
    },
    {
      id: 12,
      name: 'Fruit Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      price: '$',
    },
    {
      id: 13,
      name: 'Wings',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$',
    },
    {
      id: 14,
      name: 'Baked Chicken',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
    {
      id: 15,
      name: 'Chicken Tenders',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: '$',
    },
    {
      id: 16,
      name: 'Chicken Kabob',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [food, setfood] = useState(data);






  function filterType(foodname) {
    console.log("button pressed   " + foodname);
    setfood(data.filter((item) => {
      return item.category === foodname
    }))
  }

  function filterPrice(foodprice) {
    console.log("button pressed   " + foodprice);
    setfood(data.filter((item) => {
      return item.price === foodprice
    }))
  }

  function setAll() {
    setfood(data)
  }



  return (

    <div style={{ width: '100%', maxWidth: '1640px' }}>
      <Header />
      <Hero />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <HeadlineCard title={"UI/UX Design"} description={"Creative and innovative"} imgURL={"https://images.ctfassets.net/ooa29xqb8tix/7hmqCSqtjjQ8I3C6ZRxrNO/32bd73d6935b6f2e1763f250567e3dc5/AI-Driven_UI_Design_with_Midjourney_and_Figma_image_1.jpg"} />
        <HeadlineCard title={"Software Architecture"} description={"best and flawless"} imgURL={"https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} />
        <HeadlineCard title={"Website Design"} description={"For reasonable prices"} imgURL={"https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-open-laptop-web-design-development-on-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
      </div>

      <div style={{ fontWeight: 'bold', marginLeft: 0, marginTop: 40, color: 'yellowgreen', fontSize: 40, justifyContent: 'center', textAlign: 'center', backgroundColor: 'black' }}>Best Selling Items</div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 11, marginRight: 20 }}>
        <div style={{ fontWeight: 'bold', marginLeft: 8, marginTop: 40 }}>Filter Items</div>
        <div style={{ fontWeight: 'bold', marginLeft: 8, marginTop: 40 }}>Filter Price</div>
      </div >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 10 }}>
          <Button title={"All"} pressed={setAll} />
          <Button title={"burger"} pressed={filterType} />
          <Button title={"pizza"} pressed={filterType} />
          <Button title={"salad"} pressed={filterType} />
          <Button title={"chicken"} pressed={filterType} />

        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
          <Button title={"All"} pressed={setAll} />
          <Button title={"$"} pressed={filterPrice} />
          <Button title={"$$"} pressed={filterPrice} />
          <Button title={"$$$"} pressed={filterPrice} />
          <Button title={"$$$$"} pressed={filterPrice} />
        </div>
      </div>


      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 4fr))', gap: '30px', margin: 10 }}>
        {food.map((item, index) => (
          <div
            key={item.id}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: 350, height: 225 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: hoveredIndex === index ? '' : 'rgba(0,0,0,0.2)',
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 10,
                boxSizing: 'border-box',
                zIndex: 2,
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <p style={{ fontWeight: 'bold', fontSize: 30, color: "white" }}>{item.name}</p>
              <p style={{ color: "yellowgreen", fontSize: 14 }}>{item.category}</p>
              <button
                style={{
                  cursor: 'pointer',
                  backgroundColor: hoveredIndex === index ? "yellowgreen" : "white",
                  color: hoveredIndex === index ? "white" : "yellowgreen",
                  borderRadius: 20,
                  padding: '10px 20px',
                  width: 109,
                  fontWeight: "bold",
                  border: 'none',
                }}
              >
                Order Now
              </button>
            </div>

            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 20,
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
                zIndex: 1,
              }}
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
      </div>
      {/* -------------------------------------------------------------- */}

      <DisplayCategories/>



    </div>
  );
}

export default App;