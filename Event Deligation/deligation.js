//Event delegation is a design pattern in JavaScript that allows you to handle events more efficiently. It works by attaching a single event listener to a parent element and then using the event.target property to determine which child element triggered the event.
//এটি একটি প্যারেন্ট এলিমেন্টে ইভেন্ট হ্যান্ডলার লাগানোর মাধ্যমে তার সব চাইল্ড এলিমেন্টে ইভেন্ট হ্যান্ডল করার সুযোগ দেয়।
// 1. Select a parent element that contains all of the elements that you want to handle events for.
// 2. Add an event listener to the parent element.
// 3. In the event listener, check the target property of the event object to determine which element actually triggered the event.
// 4. If the target element is one of the elements that you want to handle events for, then perform the desired action.

document.querySelector('.my-list').addEventListener('click', function (e) {
    if (e.target.matches('li')) { //matches() use for check targeted element li or nonne
        console.log(`${e.target.innerText} clicked`);
        e.target.style.color = 'red'
    }

})