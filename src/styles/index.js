import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      map: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
      floatingButton: {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: '#ee6e73',                                    
        position: 'absolute',                                          
        bottom: 20,                                                    
        right: 20, 
        alignItems: 'center',
        justifyContent: 'center',
      },
      markerItem: {
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
      },
      markerTitle: {
        fontSize: 20,
      },
      markerDescription: {
        flex: 1, 
        flexWrap: 'wrap',
        fontSize: 17,
        backgroundColor: '#f4511e',
      },
      markerList: {
          width: '95%',
          height: '100%'
      },
      markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '50%'
      },
      marker: {
        height: 48,
        width: 48
      },
      addLocationButton: {
        width: '90%',  
        height: 45,   
        borderRadius: 5,            
        backgroundColor: '#ee6e73',                                    
        position: 'absolute',                                          
        bottom: 20,                                                    
        right: 20, 
        alignItems: 'center',
        justifyContent: 'center',
      },
});