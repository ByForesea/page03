window.addEventListener('load', () =>{
  const preload=document.querySelector('.preload');
  preload.classList.add('preload-finish');

});

var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {

        var mybutton = document.getElementById("myBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }

        }

        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            }
    
    
            function openNav() {
            document.getElementById("myNav").style.width = "100%";
            }
    
            function closeNav() {
            document.getElementById("myNav").style.width = "0%";
            }
    
            function closeNav() {
            document.getElementById("myNav").style.width = "0%";
            }
    

            

              function myFunction() {
                var x = document.getElementById("block1");
                if (x.style.display === "none") {
                  x.style.display = "block";
                } else {
                  x.style.display = "none";
                }
              }

              $(document).ready(function(){
                $("#button2").click(function(){
                  $("#panel").slideToggle("slow");
                });
              });

              $(document).ready(function(){
                $("#button1").click(function(){
                  $("#panel1").slideToggle("slow");
                });
              });

              function increment(elem, finalVal) {
                var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
                if (currVal < finalVal) {
                  currVal++;
                  document.getElementById(elem).innerHTML = currVal + "%";
              
                  setTimeout(function() {
                    increment(elem, finalVal);
                  }, 40)
                }
              };

              // $(document).ready(function(){
              //   $(".btn1").click(function(){
              //   $("#panel").toggle(1000);
              //   });
              // });

              // $("#button2").click(function () {
              //   $("#panel").toggle("slow");
              //   });
              $('#1').waypoint(function() {
                increment(1, 70);
              }, {offset: '100%'});

gsap.registerPlugin(ScrollTrigger);
              
gsap.to(".main3-pic2",{
        
            scrollTrigger: {
                trigger: ".main3-pic7",
                     // pin the trigger element while active
                start: "center center", // when the top of the trigger hits the top of the viewport
                end: "center center", // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                // markers: true,
                    
                  },
                  
                opacity: 1,
                ease:"none",
                duration:3000,
                
                  
                });

gsap.to(".main3-pic8",{
        
            scrollTrigger: {
                trigger: ".main3-pic7",
                         // pin the trigger element while active
                start: "center center", // when the top of the trigger hits the top of the viewport
                end: "center center", // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                // markers: true,
                        
                      },
                      
                opacity: 0,
                ease:"none",
                duration:2,
                      
                    });



               gsap.to(".bub",{
        
                      scrollTrigger: {
                          trigger: ".clo",
                                           // pin the trigger element while active
                          start: "center center", // when the top of the trigger hits the top of the viewport
                          end: "center center", // end after scrolling 500px beyond the start
                          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                          // markers: true,
                                          
                             },
                                        
                          y: -100,
                          opacity: 1,
                          ease:"ease-in-out",
                          transtion: 10,
                          
                                        
                            });         

               gsap.to(".main3-shape",{
        
                      scrollTrigger: {
                          trigger: ".main3-pic7",
                                           // pin the trigger element while active
                          start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                          end: "center center", // end after scrolling 500px beyond the start
                          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                          // markers: true,
                                          
                             },
                                        
                          background: "#1f5a43",
                          ease:"ease-in-out",
                          transtion: 10,
                                        
                            });                      
              
                gsap.to(".main3-text1",{
        
                      scrollTrigger: {
                          trigger: ".main3-pic7",
                                           // pin the trigger element while active
                          start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                          end: "center center", // end after scrolling 500px beyond the start
                          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                          // markers: true,
                                          
                             },
                                        
                          color: "#1f5a43",
                          ease:"ease-in-out",
                          transtion: 10,
                                        
                            });                     

                  gsap.to(".on",{
        
                      scrollTrigger: {
                          trigger: ".main3-pic1",
                          start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                          end: "center center", // end after scrolling 500px beyond the start
                          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                          // markers: true,
                                          
                             },
                                        
                          rotation: 45,
                          ease:"ease-in-out",
                          duration: 1,
                                        
                            }); 


                    gsap.to(".main3-pic3",{
        
                      scrollTrigger: {
                          trigger: ".empty",
                          start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                          end: "center center", // end after scrolling 500px beyond the start
                          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                          // markers: true,
                                          
                             },
                          opacity: 1,              
                          y: -550,
                          ease:"none",
                          duration: 5,
                          rotation: 30,              
                            }); 

               gsap.to(".main4-pic2",{
        
                      scrollTrigger: {
                          trigger: ".main4-text1",
                          start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                          end: "top top", // end after scrolling 500px beyond the start
                          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                          // markers: true,
                                          
                             },
                          
                          ease:"none",
                          duration: 5,
                          rotation: 50,              
                            }); 


                            gsap.to(".main4-bub1",{
        
                              scrollTrigger: {
                                  trigger: ".main4-text2",
                                  start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                                  end: "top top", // end after scrolling 500px beyond the start
                                  scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                  // markers: true,
                                                  
                                     },
                                     opacity:0,
                                  x:-50,
                                  y:-100,
                                  ease:"none",
                                  duration: 5,
                                               
                                    }); 
        
                                    gsap.to(".main4-bub2",{
        
                                      scrollTrigger: {
                                          trigger: ".main4-text2",
                                          start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                                          end: "top top", // end after scrolling 500px beyond the start
                                          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                          // markers: true,
                                                          
                                             },
                                             opacity:0,
                                          x:-80,
                                          y:-200,
                                          ease:"none",
                                          duration: 5,
                                                       
                                            }); 

                                            gsap.to(".main4-bub3",{
        
                                              scrollTrigger: {
                                                  trigger: ".main4-text2",
                                                  start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                                                  end: "top top", // end after scrolling 500px beyond the start
                                                  scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                                  // markers: true,
                                                                  
                                                     },
                                                     opacity:0,
                                                  x:-110,
                                                  y:-300,
                                                  ease:"none",
                                                  duration: 5,
                                                               
                                                    }); 


                                                    gsap.to(".#block1",{
        
                                                      scrollTrigger: {
                                                          trigger: ".main4-text2",
                                                          start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                                                          end: "top top", // end after scrolling 500px beyond the start
                                                          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                                          // markers: true,
                                                                          
                                                             },
                                                             opacity:0,
                                                          x:-110,
                                                          y:-300,
                                                          ease:"none",
                                                          duration: 5,
                                                                       
                                                            }); 
        

                            
                        


              