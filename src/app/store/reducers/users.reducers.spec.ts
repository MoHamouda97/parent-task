import { User } from "src/app/modules/users/types/users";
import * as fromReducer from './users.reducers';
import { UsersLoaded } from "../users/users.actions";

describe('Users State', () => {
    it('should return the default state', () => {
        const { initUserssState } = fromReducer;
        const Users: User[] = [
            {id: 1, first_name: 'Mohammed', last_name: 'Hamouda', email: 'm@m.com', avatar: ''}
        ];
        const action = UsersLoaded({Users})
        const state = fromReducer.UsersReducer(initUserssState, action);
        const newState: User[] = Users
        expect(state.entities['1']).toEqual(newState[0]);
      });
}); 