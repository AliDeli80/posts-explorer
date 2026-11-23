export default function Page() {
  return (
    <body className="flex min-h-screen flex-row items-center justify-between p-10">
      <nav className="flex flex-col min-h-screen items-center justify-between p-4">
        <div>
          <span>icon</span>
          <h2>posts-exlorer</h2>
        </div>
        <ul>
          <li className="flex flex-row justify-between gap-2">
            <span>icon</span>
            <p>Explore</p>
          </li>
          <li className="flex flex-row justify-between gap-2">
            <span>icon</span>
            <p>For You</p>
          </li>
          <li className="flex flex-row justify-between gap-2">
            <span>icon</span>
            <p>Saved</p>
          </li>
          <li className="flex flex-row justify-between gap-2">
            <span>icon</span>
            <p>Notification</p>
          </li>
          <li className="flex flex-row justify-between gap-2">
            <span>icon</span>
            <p>Profile</p>
          </li>
          <div>
            <p>discover more amazing content</p>
            <button>Upgrade Pro →</button>
          </div>
          <div className="flex flex-row items-center justify-between gap-4">
            <span>avatar</span>
            <p>user name ↓</p>
          </div>
        </ul>
      </nav>
      <main className="flex flex-col">
        <header>
          <h1>Explorer Posts</h1>
          <h4>Discover the best content, tailpred for you.</h4>
          <div>
            <span>icon</span>
            <input type="text" name="search-bar" id="search-bar" />
          </div>
        </header>
      </main>
    </body>
  );
}
