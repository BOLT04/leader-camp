# leader-camp
An app to help people become leaders by learning with people they admire. Users can join the community and learn with others!

Project initially for [Cloud Native Hackathon](https://www.commclassroom.org/cloudnativehack)

_Note: This project is overengineered 😅 Most features are out-of-scope for the hackathon, I'm building a simple MVP with all the technology I want to learn and that is aligned with the sponsors that have KNCA vouchers in their prize 😄_

## Features
- Login with GitHub
    - Nice to have - Login with Google
- Web app with 3 tabs: Leadership in tech; Resources; Live chat
- **Automated onboarding** for industry known leaders. A process to validate they are who they say they are, through a 3rd party authenticator
- Ability to post a question so that others can answer
- Check leader profiles and see related leaders
    - related by blog posts, since they both wrote
    - by videos they did together
    - by books
    - each profile has the name, books, website, related leaders and a button to connect with the leader
        - this starts the process of trying to contact a leader for a specific questions
        - Each user that clicks the button gets added to the queue, once it's full the button is disabled (queue limit is set by the leader)
        - Then there is an events tab and these private events will be hosted in the live chat app so that the leader can do a AMA. People can send questions in advance, that get submitted only when the live show starts (with debouncing, they dont get submitted all at once). Then there will be a page to see the event details, where you have access to a transcript with the timestamp of the question and it's answer.
- Random quotes on home page
- Cron jobs to check if the leader completed their verification process. If not send an email. If too many emails were sent, cancel the leader process and notify the user that they need to re-apply, having their account with just basic access.
- Quote of the month for signed in users
- Blogs
    - Leaders can sync their blogs so that they **only post in one place** and that content shows in leader camp, notifying subscribers
- Podcasts
    - simon sinek
    - gary vee
    - etc
    
    
## Resources
    
Throughout the hackathon I googled a lot and learned a ton 😄. I'm in the process of continuous learning, so I'll be sharing some resources (blogs, videos, etc) that helped me learn below 🙂:
    
- [https://dev.to/slashpai/quickly-creating-kubernetes-manifest-files-using-kubectl-2khj](https://dev.to/slashpai/quickly-creating-kubernetes-manifest-files-using-kubectl-2khj)
