### Documentation:
I started with drawings and sketching out some of what I wanted to see. My workflow seems a bit chaotic because I prefer to learn by doing and practicing more and more. 
Often this gets left out. I'm constantly iterating on what design I have.

### Code Explanation
```
{
    <div class="col">
        <h4 class="text-center">stats</h4>
        <div class="progress border">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width:45%"></div>
        </div>
        <a class="progress-text" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="is it too bright in here?"><h4>awakeness</h4></a>

        <div class="progress border">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success border" style="width:90%"></div>
        </div>
        <a class="progress-text" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="another cup of coffee won't hurt"><h4>caffeine</h4></a>

        <div class="progress border">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width:10%"></div>
        </div>
        <a class="progress-text" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="SLEEP IS FOR THE WEAK (wait no pls i need more sleep)"><h4>sleep</h4></a>

        <div class="progress border">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width:25%"></div>
        </div>
        <a class="progress-text" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="its called *anxiety*"><h4>social battery</h4></a>

        <div class="progress border">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width:99%"></div>
        </div>
        <a class="progress-text" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="I will prevail (over this finals season)"><h4>determination</h4></a>

        <div class="progress border">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width:100%"></div>
        </div>
        <a class="progress-text" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Can't say I didn't try B)"><h4>effort</h4></a>
    </div>
}
```
- status progress bars with popovers
1. created a grid with a huge empty space underneath the photo
2. realized i could create nested columns to fill the space
3. made a div with a bunch of progress bar containers
4. filled with content and added popovers
5. modified the $progress-border-radius, $progress-box-shadow, $danger, $warning, and $success
6. added a class to style the links in css

```
{
  <ul>
    <li>            
        <a class="truth" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Truth! I accidentally did :/">i accidentally kicked a whale shark</a>
    </li>
    <li>            
        <a class="lie" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Lie! I have never and probably won't">i can whistle and made a song acapella</a>
    </li>
    <li>            
        <a class="truth" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content= "Truth! I love all animals but 'lil kitties have my heart">my favorite animal is a cat</a>
    </li>
    <li>            
        <a class="truth" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Truth! I love travelling">i've been to both alaska and hawaii</a>
    </li>
    <li>            
        <a class="lie" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Lie! I compete in Valorant but I truly love story-based singleplayer games like Baldur's Gate 3, Red Dead Redemption 2, and The Wolf Among Us">my favorite game is valorant</a>
    </li>
    <li>            
        <a class="truth" href="#" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Truth! It was in Texas :D (def did not win ;-;)">i have competed at a Valorant LAN tournament</a>
    </li>
</ul>
}
```

- four truths and 2 lies
1. created an unordered list with link items
2. created classes truth and lie to turn the hover state into a lie detector in css
3. added popovers with content and overrode bootstrap in sass


### issues
- I got stuck at some sass customization stuff. I figured it out by looking at the references for it and realized that I was overthinking it.
- I also got stuck when it came to css styling vs sass customization. AKA Why isn't the page doing what I told it to do in terms of the basic stuff like background color. Also was overthinking it.
- Sometimes I would come up with one way to do something and after thinking about it I'd find an easier, much more efficient way to do the task I wanted. For example, I was trying to get the 4 truths and 2 lies to work by using js functions for changing color onclick but then I realized that it would be much easier if I just used links and on hover.

### what you learned
- using sass to customize bootstrap variables
- bootstrap progress bars, griding, slideshows, tabs, popovers, + css customization
- small amounts of js to help enable some features
- feel really confident using griding and basic bootstrap. I feel very self-proficient in my code and genuinely proud.

### next steps
- fixing small aesthetic issues like adding more color blocks
- fixing the sizing, padding of some elements
- adding more content to pages
- adding a suggestions modal with a form on it to the games design, content creation, and audio production pages
