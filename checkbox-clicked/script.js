const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target))
    );

// e.target = clickone *****************

// Function to handle the logic when a toggle element is clicked

function doTheTrick(clickone) {
    // Check if all three toggles are checked
    if (good.checked && cheap.checked && fast.checked) {
        // Uncheck the other toggle when one is clicked
        if (good.checked === clickone) {
            fast.checked = false;
        }            
            if(cheap.checked = clickone){
                good.checked = false;
            }            
            
            if(fast.checked = clickone){
                cheap.checked = false;
            }
        }

    }