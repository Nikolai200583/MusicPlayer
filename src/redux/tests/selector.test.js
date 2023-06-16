import{selectTrack} from '../../hooks/selectors'

describe('redux selectors', () => {
    it('should select track from state', () => {
        const track =[{id: 8, name: 'chase'}];
        const result = selectTrack({ track });
        expect(result).toEqual(track)
    })
})