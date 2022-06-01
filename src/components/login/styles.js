import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
  logoImage: {
    height: '150@s',
    width: '150@s',
    alignSelf: 'center',
    marginTop: '50@s',
  },
  title: {
    fontSize: '21@s',
    textAlign: 'center',
    fontWeight: '500',
    paddingTop: '20@s',
  },
  subTitle: {
    fontSize: '17@s',
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: '20@s',
  },
  form: {
    paddingTop: '20@s',
  },
  createSection: {
    flexDirection: 'row',
    marginTop: '15@s',
  },
  infoText: {
    fontSize: '17@s',
  },
  linkBtn: {
    paddingLeft: '17@s',
    color: colors.primary,
    fontSize: '16@s',
  },
});
