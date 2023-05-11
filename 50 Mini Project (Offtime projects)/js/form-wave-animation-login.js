const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        //put each label letter to array
        .split('')
        //array of letters with a span around it with transition delay
        //letter = array of letters idx = index of array
        //use style for delay each letter to pop up and down. first one is to be 0, 2nd - 50, 3rd - 100 4th = 150..so on to get delay effect. make sure put ms for time. you can slow the speed by increasing number of index. ex. idx *300 will make it slower.
        .map((letter, idx) => `<span style="transition-delay: ${idx * 300}ms">${letter}</span>`)
        //turn back to string
        .join('');
});

