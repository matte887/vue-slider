const app = new Vue(
    {
        el: '#root',
        data: {
            destinations: [
                {
                    countryImage: 'img/01.jpg',
                    countryName: 'Svezia',
                    countryText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    countryImage: 'img/02.jpg',
                    countryName: 'Svizzera',
                    countryText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    countryImage: 'img/03.jpg',
                    countryName: 'Gran Bretagna',
                    countryText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    countryImage: 'img/04.jpg',
                    countryName: 'Germania',
                    countryText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    countryImage: 'img/05.jpg',
                    countryName: 'Paradise',
                    countryText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                }
            ],
            currentSlide: 0
        },
        methods: {
            previousSlide: function() {
                // se sono alla prima, mi posiziono sull'ultima
                if (this.currentSlide == 0) {
                    this.currentSlide = this.destinations.length - 1; // ultima
                } else {
                    this.currentSlide--; // precedente
                }
            
                console.log('Prev', this.currentSlide);
            },

            nextSlide: function() {
                // se sono all'ultima, mi posiziono sulla prima
                if (this.currentSlide == this.destinations.length - 1) {
                    this.currentSlide = 0; // prima
                } else {
                    this.currentSlide++; // successiva
                }
                
                console.log('Next', this.currentSlide);
            },

            clickThumb: function(index) {
                this.currentSlide = index;
            }
        }
    }
);