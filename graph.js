                        // value get in variables
           
            let showsingle = document.getElementById("one");
            let showcomparsion = document.getElementById("second")
            let showdifference=document.getElementById("third")
            let ones =document.getElementById("ones")
            let seconds =document.getElementById("seconds")
            let thirds =document.getElementById("thirds")
            let livetest=document.getElementById("livetest1");
            let livetest2=document.getElementById("livetest2");
            let livetest3=document.getElementById("livetest3");
            let uploads1=document.getElementById("upload1");
            let lives1=document.getElementById("lives1");
            let uploads2=document.getElementById("upload2");
            let lives2=document.getElementById("lives2");
            let uploads3=document.getElementById("upload3");
            let lives3=document.getElementById("lives3");              
            let linechart=document.getElementById("line-chart");
            let linelive=document.getElementById("line-live");
            let linechart2=document.getElementById("line-chart2");
            let linelives2=document.getElementById("line-live2");                            
                            
             
        function changesingle(){
            showsingle.style.display="block";
            showcomparsion.style.display="none";
            showdifference.style.display="none";
            ones.style.backgroundColor="white";
            seconds.style.backgroundColor="#EAF0FA";
            thirds.style.backgroundColor=" #EAF0FA";
            uploads1.style.backgroundColor="white";
            lives1.style.backgroundColor="#EAF0FA";
            livetest2.style.display="none";    
            }

        function changescomparison(){
            showcomparsion.style.display="block";
            showsingle.style.display="none";
            showdifference.style.display="none";
            seconds.style.backgroundColor="white";
            ones.style.backgroundColor=" #EAF0FA";
            thirds.style.backgroundColor=" #EAF0FA";
            livetest.style.display="none";
            uploads2.style.backgroundColor="white";
            lives2.style.backgroundColor="#EAF0FA";
            livetest2.style.display="none";
            }

        function changediff(){
            showdifference.style.display="block";
            showsingle.style.display="none";
            showcomparsion.style.display="none";
            thirds.style.backgroundColor="white";
            ones.style.backgroundColor=" #EAF0FA";
            seconds.style.backgroundColor="#EAF0FA";
            uploads3.style.backgroundColor="white";
            lives3.style.backgroundColor="#EAF0FA";
            livetest2.style.display="none";
            }            
                            
                            

        document.getElementById('localupload').addEventListener('click', () => {
        document.getElementById('fileInput').click()
        })

        document.getElementById('localupload1').addEventListener('click', () => {
        document.getElementById('fileInput').click()
        })
        document.getElementById('localupload2').addEventListener('click', () => {
        document.getElementById('fileInput').click()
        })
    // 3,Difference page
        document.getElementById('localupload3').addEventListener('click', () => {
        document.getElementById('fileInput').click()
        }) 
        document.getElementById('localupload4').addEventListener('click', () => {
        document.getElementById('fileInput').click()
            }) 

                            // Upload change Script

    // 1,Single page
        function live1(){
            uploads1.style.backgroundColor="#EAF0FA";
            lives1.style.backgroundColor="white";
            livetest.style.display="block";
            showsingle.style.display="none";
            Table.style.display="none";
            Flame.style.display="none";
            linegraph.style.display="none";
            linechart.style.display="#EAF0FA";
                }
        function upload1(){
            uploads1.style.backgroundColor="white";
            lives1.style.backgroundColor="#EAF0FA";
            livetest.style.display="none";
            showsingle.style.display="block";
                }
    // 2,Comparsion page
                        // live test
        function live2(){
            uploads2.style.backgroundColor="#EAF0FA";
            lives2.style.backgroundColor="white";
            livetest2.style.display="block";               
            livetest.style.display="none";
            showcomparsion.style.display="none";
            Comflamess.style.display="none";               
            Com.style.display="none";                
            Compargraph.style.display="none";
            Comparimage.style.display="none";                
            linechart2.style.backgroundColor="#EAF0FA";               
                        }
        function upload2(){
            uploads2.style.backgroundColor="white";
            lives2.style.backgroundColor="#EAF0FA";
            livetest2.style.display="none";
            showcomparsion.style.display="block";
                        }
    // 3,Difference page
        function live3(){
            uploads3.style.backgroundColor="#EAF0FA";
            lives3.style.backgroundColor="white";
            livetest3.style.display="block";
            showdifference.style.display="none";
            diffgraphs.style.display="none";
            diffimage.style.display="none";
            difftabel.style.display="none";
            linechart2.style.backgroundColor="#EAF0FA"
                    }
        function upload3(){
            uploads3.style.backgroundColor="white";
            lives3.style.backgroundColor="#EAF0FA";
            livetest3.style.display="none";
            showdifference.style.display="block";
                    }

                        // live test change Script 

    // 1,Single page
        function line1(){
            linechart.style.backgroundColor="#EAF0FA";
            linelive.style.backgroundColor="#white";
            livetest.style.display="none";
            showsingle.style.display="block";
                    }
         function linelive1(){
            linechart.style.backgroundColor="white";
            linelive.style.backgroundColor="#EAF0FA";
            livetest.style.display="block";
            showsingle.style.display="none";
                    }
     // 2,Comparsion page
        function line2(){
            linechart2.style.backgroundColor="#EAF0FA";
            linelives2.style.backgroundColor="#EAF0FA";
            livetest2.style.display="none";
            showcomparsion.style.display="block";
            lives3.style.display="none";
            // linelives2.style.display="none";
            // linelives2.style.display="none";
            // linechart2.style.backgroundColor="white";
            // showcomparsion.style.display="block";
            // livetest2.style.display="none";
                        }
        function linelive2(){
            linechart2.style.backgroundColor="#EAF0FA";
            linelives2.style.backgroundColor="white";
            showcomparsion.style.display="none";
            // livetest2.style.display="block";
                        }

                        // Buttons
                
                // Single page buttons
        // 1,Table
            let button1=document.getElementById("button1");
            let Table=document.getElementById("Tabbut");
            let linegraph=document.getElementById("linegraph");
            function but1(){
                linegraph.style.display="block";
                Table.style.display="block";
                Flame.style.display="none";

            }
        // 2,Flamegraph
            let button2=document.getElementById("button2");
            let Flame=document.getElementById("flambut");

            function but2(){
                Flame.style.display="block";
                Table.style.display="none";
                linegraph.style.display="block";
            }
        // 3,Both
            let button3=document.getElementById("button3");
            
            function but3(){
                Flame.style.display="block";
                Table.style.display="block";
                linegraph.style.display="block";
            }
        // 4,CPU Ram
            let button4=document.getElementById("button4")
            let  Chart=document.getElementById("linegraph")
            let Image=document.getElementById("imagegraph")   

            function but4(){
                Table.style.display="block";
                Chart.style.display="block";
                Image.style.display="none";
            }

                    // Comparsion page
        // 1,Tabel
            let Com=document.getElementById("Comtabel")
            let Comm1=document.getElementById("Comtabel1")
            let Comton1=document.getElementById("Comton1")
        
            function Com1(){
                Com.style.display="block";
                Comm1.style.display="block";
                // Comflame.style.display="none";
                Compargraph.style.display="block";
                Comparimage.style.display="none";
                Compargraph.style.display="flex";
                Com.style.display="flex";
    
            }
        // 2,Flamegraph
            let Comflame=document.getElementById("Comflame")
            let Compargraph=document.getElementById("Compar-graph")
            let Comparimage=document.getElementById("Compar-image")
            function Com2(){
                // Comflame.style.display="block";
                Com.style.display="none";
                Compargraph.style.display="block";
                Comparimage.style.display="block";
                Compargraph.style.display="flex";
                Comparimage.style.display="flex";
            }
        // 3,Both
            let Comton3=document.getElementById("Comton3");
            let Comflamess=document.getElementById("Comflame");
            function Com3(){
                Com.style.display="block";
                Comflame.style.display="block";
            }
        // 4,CPU Ram
            let Comton4=document.getElementById("Comton4");
            let Comgraphs=document.getElementById("Compar-graph");
            let Comimage=document.getElementById("Compar-image")
            function Com4(){
                Comgraphs.style.display="block";
                Comimage.style.display="none";
                Compargraph.style.display="flex";
                Com.style.display="flex";
            }
                        // difference page
        // 1,Tabel
            let diffton1=document.getElementById("diffton1");
            let difftabel=document.getElementById("difftabel");
            // let diffgraph=document.getElementById("diffgraph");
            function Diff1(){
                difftabel.style.display="block";
                diffgraphs.style.display="block";
            }
        // 2,Flamegraph
            let diffton2=document.getElementById("diffton2");
            function Diff2(){
                diffimage.style.display="block";
                diffgraphs.style.display="block";
                difftabel.style.display="none";
            }
        // 3,Both
            let diffton3=document.getElementById("diffton3");
            function Diff3(){
                diffgraphs.style.display="block";
                diffimage.style.display="block";
                difftabel.style.display="block";
            }
        // 4,CPU 
            let diffton4=document.getElementById("diffton4");
            let diffgraphs=document.getElementById("diffgraph");
            let diffimage=document.getElementById("diff-image");
            function Diff4(){
                difftabel.style.display="block";
                diffgraphs.style.display="block";
                diffimage.style.display="none";
            }
