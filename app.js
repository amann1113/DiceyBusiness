class Die {
    static diceArray = [];

    constructor() {
        Die.diceArray.push(this);
        this.render();
        this.roll();
        this.reroll();
        this.remove();
    }
    render() {
        this.div = $('<div class="die shadow"></div>');
        $('.die-container').append(this.div);
    }
    roll() {
        this.val = Math.floor((Math.random() * 6) + 1);
        this.div.text(this.val);
    }
    reroll() {
        this.div.click(() => {
            this.removeStyle();
            this.roll()
        });
    }
    remove() {
        this.div.dblclick(() => {
            this.div.remove()
            let index = Die.diceArray.indexOf(this);
            Die.diceArray.splice(index, 1);
        });
    }
    removeStyle() {
        let cssClassArray = ['die-2', 'two', 'three', 'four-and-six', 'five'];
        cssClassArray.forEach(style => this.div.removeClass(style));
        this.div.addClass('die');
    }
    changeStyle() {
        let span = $('<span class="dot"></span>');
        let span2 = $('<span class="dot"></span><span class="dot"></span>');
        let span3 = $('<span class="dot"></span><span class="dot"></span><span class="dot"></span>');
        let span4 = $('<div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div>');
        let span5 = $('<div class="column"><span class="dot"></span><span class="dot"></span></div><div class ="column"><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div>');
        let span6 = $('<div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>');
        switch (this.val) {
            case 1:
                this.div.text('');
                this.div.append(span);
                break;
            case 2:
                this.div.text('');
                this.div.removeClass('die').addClass('die-2 two');
                this.div.append(span2);
                break;
            case 3:
                this.div.text('');
                this.div.removeClass('die').addClass('die-2 three');
                this.div.append(span3);
                break;
            case 4:
                this.div.text('');
                this.div.removeClass('die').addClass('die-2 four-and-six');
                this.div.append(span4);
                break;
            case 5:
                this.div.text('');
                this.div.removeClass('die').addClass('die-2 five');
                this.div.append(span5);
                break;
            case 6:
                this.div.text('');
                this.div.removeClass('die').addClass('die-2 four-and-six');
                this.div.append(span6);
                break;
        }
    }
}

$('.new-die').click(() => new Die());

$('.roll-die').click(() => {
    Die.diceArray.forEach(die => {
        die.removeStyle();
        die.roll();
    });
});

$('.sum-die').click(() => {
    let sum = Die.diceArray.reduce((total, die) => (total += die.val), 0);
    Swal.fire(`The sum is: ${this.sum}`);
});

$(`.change-die`).click(() => Die.diceArray.forEach(die => die.changeStyle()));

