import axios from 'axios'
import qs from 'qs'
const aurl = 'https://wx.ihuanxi.cn/lib/common/getMobileCode.php'
const burl = 'https://wx.ihuanxi.cn/kd/washing/localphp/putCoupon.php'


//获取验证码
export const add = data => {
	return axios.request({
		url: aurl,
		method: 'post',
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		data: data
	})
}

export const putCoupon = data => {
	return axios.request({
		url: burl,
		method: 'post',
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		data: data
	})
}
