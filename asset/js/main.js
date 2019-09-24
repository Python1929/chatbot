        window.app = new Vue({
            el: '#app',
            data: {
                inputs: [
                ],
                texts: [],
                dates: [],
                selects: [],
                number: [],
                rating: [],
                links: [],
                options: [],
                emails: [],
                booking: [],
                list: [],
                range: [],
                scale: [],
                file: [],
                sel: [],
                msel: [],
                mcho: [],
                showModal: false,
                showText: false,
                showDate: false,
                showSelect: false,
                showNumber: false,
                showRating: false,
                showLink: false,
                showOption: false,
                showEmail: false,
                showBooking: false,
                showList: false,
                showRange: false,
                showScale: false,
                showFile: false,
                showDesign: false,
                showContent: false,
                slides: 16,
            },
            components: {
                'carousel-3d': Carousel3d.Carousel3d,
                'slide': Carousel3d.Slide
            },
            
            
            methods: {

               
                addRow() {
                    this.inputs.push({})
                },
                addText() {
                    this.texts.push({})
                },
                addDate() {
                    this.dates.push({})
                },
                addSelect() {
                    this.selects.push({})
                },
                addNumber() {
                    this.number.push({})
                },
                addRating() {
                    this.rating.push({})
                },
                addLink() {
                    this.links.push({})
                },
                addOption() {
                    this.options.push({})
                },
                addEmail() {
                    this.emails.push({})
                },
                addBooking() {
                    this.booking.push({})
                },
                addList() {
                    this.list.push({})
                },
                addRange() {
                    this.range.push({})
                },
                addScale() {
                    this.scale.push({})
                },
                addFile() {
                    this.file.push({})
                },
                addSel() {
                    this.sel.push({})
                },
                addMcho() {
                    this.mcho.push({})
                },
                addMsel() {
                    this.msel.push()
                },
                deleteMsel(msel) {
                    this.msel.splice(msel, 1)
                },
                deleteMcho(mcho) {
                    this.mcho.splice(mcho, 1)
                },
                deleteSel(link) {
                    alert(link)

                    this.sel.splice(link, 1)
                },
               deleteRow(index) {
                    alert(index)
                    this.inputs.splice(index, 1)
                },
                deleteText(index2) {
                    alert(index2)
                    this.texts.splice(index2, 1)
                },
                deleteDate(index3) {
                    this.dates.splice(index3, 1)
                },
                deleteSelect(index4) {
                    this.selects.splice(index4, 1)
                },
                deleteNumber(index5) {
                    this.number.splice(index5, 1)
                },
                deleteRating(index6) {
                    this.rating.splice(index6, 1)
                },
                deleteLink(index7) {
                    this.links.splice(index7, 1)
                },
                deleteOption(index8) {
                    this.options.splice(index8, 1)
                },
                deleteEmail(index9) {
                    this.emails.splice(index9, 1)
                },
                deleteBooking(index10) {
                    this.booking.splice(index10, 1)
                },
                deleteList(index11) {
                    this.list.splice(index11, 1)
                },
                deleteRange(index12) {
                    this.range.splice(index12, 1)
                },
                deleteScale(index13) {
                    this.scale.splice(index13, 1)
                },
                deleteFile(index14) {
                    this.file.splice(index14, 1)
                },


            },
            // components: {
            //     'carousel-3d': Carousel3d.Carousel3d,
            //     'slide': Carousel3d.Slide
            // }


        })


        $('.responsive').slick({
            dots: false,
            infinite: false,
            speed: 100,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: true,
            centerPadding: '60px',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  centerMode: true,
                  centerPadding: '40px',
                //   infinite: true,
                //   dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  centerMode: true,
                  centerPadding: '40px',

                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: '40px',
               
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });