BarDiv = document.getElementById("container");
var n = 0;
let arr = [];
submitBtn = document.getElementById("user-button");

submitBtn.addEventListener('click', () => {
    n = document.getElementById("user-input").value;
    if( n > 50){
        alert("Entered number is too big!! Enter number below 50")
    }
    else{
        let barWidth = (BarDiv.clientWidth / n) - 2; 
        BarDiv.innerHTML = ''; 

        for(let i = 0; i < n; i++) {
            let barHeight = Math.floor(Math.random() * 550) + 1; 
            const bar = document.createElement('div');
            bar.classList.add('array');
            bar.style.height = `${barHeight}px`;
            bar.style.width = `${barWidth}px`;
            BarDiv.appendChild(bar);
    }}});

   async function BubbleSort(){
        let bars = document.querySelectorAll('.array');
        let speedInput = document.getElementById("speedSlider");
        for(let i = 0 ; i < n- 1; i++)
        {
            for(let j = 0 ; j < n - i - 1 ; j++)
            {
              bars[j].style.backgroundColor = "red";
              bars[j+1].style.backgroundColor = "red";
              
              let height1 = parseInt(bars[j].style.height);
              let height2 = parseInt(bars[j + 1].style.height);

              let speed = 1000 - parseInt(speedInput.value);
              await new Promise(resolve => setTimeout(resolve, speed));

              if(height1 > height2)
              {
                bars[j].style.height = `${height2}px`;
                bars[j + 1].style.height = `${height1}px`;
              }
              bars[j].style.backgroundColor = "aqua";
              bars[j+1].style.backgroundColor = "aqua";
            }
            bars[ n - i - 1].style.backgroundColor = "green";
        }
        bars[0].style.backgroundColor = "green";


    }    
  
    async function InsertionSort(){
      let bars = document.querySelectorAll('.array');
      let speedInput = document.getElementById("speedSlider");
      bars[0].style.backgroundColor = "green";
      for(let i = 1; i< n ; i++)
      {
        let keyheight = parseInt(bars[i].style.height);
        bars[i].style.backgroundColor = 'red';
        let j = i - 1 ;
        while( j >= 0 && parseInt(bars[j].style.height) > keyheight )
        {
          let height1 = parseInt(bars[j].style.height);
          let height2 = parseInt(bars[j + 1].style.height);
          let color1 = bars[j].style.backgroundColor;
          console.log(color1);
          let color2 = bars[j + 1].style.backgroundColor;
          console.log(color2);

          let speed = 1000 - parseInt(speedInput.value);
          await new Promise(resolve => setTimeout(resolve,speed));

          bars[j].style.height = `${height2}px`;
          bars[j + 1].style.height = `${height1}px`;

          bars[j].style.backgroundColor = `${color2}`;
          bars[j+1].style.backgroundColor = `${color1};`


          j--;
        }
        bars[i].style.backgroundColor = `green`;

        for (let k = 0; k <= i; k++) {
          bars[k].style.backgroundColor = 'green';
        }

      }

    
      
    }

    async function SelectionSort(){

      let bars = document.querySelectorAll('.array');
      let speedInput = document.getElementById("speedSlider");
      n = bars.length;
      let i;
      for(i = 0 ; i < n-1 ; i++)
      {
        let minIndex = i;
        for(let j = i+1 ; j < n; j++){
          bars[i].style.backgroundColor = 'red';
          if(parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height))
          {
            minIndex = j;
            console.log(minIndex);

          }
        }
        bars[minIndex].style.backgroundColor = 'red';
        let height1 = parseInt(bars[minIndex].style.height);
        let height2 = parseInt(bars[i].style.height);

        let speed = 1000 - parseInt(speedInput.value);
        await new Promise(resolve => setTimeout(resolve,2000));


        bars[minIndex].style.height = `${height2}px`;
        bars[i].style.height = `${height1}px`;

        bars[i].style.backgroundColor = 'green';

        }
        bars[i+1].style.backgroundColor = 'green';
    }
        async function Mergesort() {
          let bars = document.querySelectorAll('.array');
          n = bars.length;
      
          await Mergesort1(0, n - 1);
      }
      
      async function Mergesort1(s, e) {
          if (s >= e) return;
      
          const mid = Math.floor((s + e) / 2);
      
          await Mergesort1(s, mid);
          await Mergesort1(mid + 1, e);
          await Merge(s, mid, e);
      }
      
      async function Merge(start, mid, end) {
          let bars = document.querySelectorAll('.array');
          let speedInput = document.getElementById("speedSlider");
          const tempArray = [];
          let i = start;
          let j = mid + 1;
      
          
          while (i <= mid && j <= end) {
              if (parseInt(bars[i].style.height) <= parseInt(bars[j].style.height)) {
                  tempArray.push(parseInt(bars[i].style.height));
                  i++;
              } else {
                  tempArray.push(parseInt(bars[j].style.height));
                  j++;
              }
          }
      
          
          while (i <= mid) {
              tempArray.push(parseInt(bars[i].style.height));
              i++;
          }
      
          
          while (j <= end) {
              tempArray.push(parseInt(bars[j].style.height));
              j++;
          }
      
          
          for (let k = start; k <= end; k++) {
              bars[k].style.height = `${tempArray[k - start]}px`;
              bars[k].style.backgroundColor = "red";
              let speed = 1000 - parseInt(speedInput.value); 
              await new Promise(resolve => setTimeout(resolve, speed)); 
              bars[k].style.backgroundColor = "green";  
          }
      }
      async function QuickSort() {
        let bars = document.querySelectorAll('.array');
        n = bars.length;
    
        await quicksort1(0, n - 1);

        for (let i = 0; i < bars.length; i++) {
          bars[i].style.backgroundColor = 'green';
      }
    }
    
    async function quicksort1(start, end) {
        if (start >= end) return;
    
        let p = await partition(start, end);
        await quicksort1(start, p - 1);
        await quicksort1(p + 1, end);
    }
    
    async function partition(start, end) {
        let bars = document.querySelectorAll('.array');
        let speedInput = document.getElementById("speedSlider");
        let speed = 1000 - parseInt(speedInput.value);  
        let pivot = parseInt(bars[start].style.height);
        let count = 0;
    
        for (let i = start + 1; i <= end; i++) {
            if (parseInt(bars[i].style.height) <= pivot) {
                count++;
            }
        }
    
        let pivotIndex = start + count;
        let height1 = parseInt(bars[pivotIndex].style.height);
        let height2 = parseInt(bars[start].style.height);
    
        await new Promise(resolve => setTimeout(resolve, speed));
    
        bars[pivotIndex].style.height = `${height2}px`;
        bars[start].style.height = `${height1}px`;
    
        bars[pivotIndex].style.backgroundColor = "purple";
    
        let i = start;
        let j = end;
    
        while (i < pivotIndex && j > pivotIndex) {
            while (parseInt(bars[i].style.height) < pivot) {
                i++;
            }
            while (parseInt(bars[j].style.height) > pivot) {
                j--;
            }
            if (i < pivotIndex && j > pivotIndex) {
                let height3 = parseInt(bars[i].style.height);
                let height4 = parseInt(bars[j].style.height);

                await new Promise(resolve => setTimeout(resolve, speed));
    
                bars[i].style.height = `${height4}px`;
                bars[j].style.height = `${height3}px`;
    
                bars[i].style.backgroundColor = "green";  
                bars[j].style.backgroundColor = "green";  
            }
        }
        return pivotIndex;


    }
    