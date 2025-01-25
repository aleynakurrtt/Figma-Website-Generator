
import './style.scss';

function RecentUser() {
  const users = Array.from({ length: 9 }, (_, index) => ({
    id: index,
    name: `Yagna`,
    surname: `Kusumanchi `,
    image: '/public/Ellipse 3.png', 
  }));

  return (
    <div className='recent'>
      <h2>Recent Users</h2>
      <div className="container-recent">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img src={user.image} alt={`${user.name} ${user.surname}`} />
            <p>
              {user.name}
              <br />
              {user.surname}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentUser;
