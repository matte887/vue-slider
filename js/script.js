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

        }
    }
);