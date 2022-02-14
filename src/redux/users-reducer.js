const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    {
      name: 'Angleina',
      location: {
        city: 'Izmail',
        country: 'Ukraine',
      },
      id: 1,
      followed: true,
      message: 'I\'ll never be scared of devil',
      photoUrl: 'https://en.meming.world/images/en/b/bc/Mike_Wazowski-Sulley_Face_Swap.jpg',
    },

    {
      name: 'Nick',
      location: {
        city: 'Sacramento',
        country: 'USA',
      },
      id: 2,
      followed: true,
      message: 'I\'ll never be scared of devil',
      photoUrl: 'https://en.meming.world/images/en/b/bc/Mike_Wazowski-Sulley_Face_Swap.jpg',
    },

    {
      name: 'Anton',
      location: {
        city: 'Izmail',
        country: 'Ukraine',
      },
      id: 3,
      followed: false,
      message: 'I\'ll never be scared of devil',
      photoUrl: 'https://en.meming.world/images/en/b/bc/Mike_Wazowski-Sulley_Face_Swap.jpg',
    },

    {
      name: 'Kate',
      location: {
        city: 'Sacramento',
        country: 'USA',
      },
      id: 4,
      followed: false,
      message: 'I\'ll never be scared of devil',
      photoUrl: 'https://en.meming.world/images/en/b/bc/Mike_Wazowski-Sulley_Face_Swap.jpg',
    },
  ],
};

export const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }

          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return {...user, followed: false};
          }

          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, action.users],
      }
    default:
      return state;
  }
};

export const followAC = (userID) => {
  return {
    type: FOLLOW,
    userID,
  };
};

export const unfollowAC = (userID) => {
  return {
    type: UNFOLLOW,
    userID,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
