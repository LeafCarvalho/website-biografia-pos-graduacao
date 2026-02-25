import News from "./news/news";
import { Profile } from "./profile/profile";

export default function Blog() {
  return (
    <div>
      <Profile />
      <News limit={3}/>
    </div>
  )
}
