var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("อยู่ในกลมมอง:", entry.target);
        }
    });
}, options);

var targetElement = document.querySelector(".target");
observer.observe(targetElement);