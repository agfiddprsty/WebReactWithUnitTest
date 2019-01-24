import { connect } from 'react-redux';
import ListNews from '../listNews';
import {fetchNews} from '../Action/NewsAction';

const mapStateToProps = (state) => (
  {
    data: state
  }
);

const mapDispatchToProps = (dispatch) => ({
  fetchNews: ()=>{
    dispatch(fetchNews())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListNews);
