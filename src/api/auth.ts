// 用户认证相关接口模块
import request from '@/utils/request'

export interface User { // 可以把定义的接口类型export出去，其他地方也可以用
    'user': {
        username: string
        email: string
        password: string
    }
}

export interface RegisterData {
    'user': {
        email: string
        token: string
        username: string
        bio: string
        image: string
    }
}

// 用户注册
export const register = async (data: User): Promise<RegisterData> => { // 此处用到了泛型<>，因为async需要返回一个Promise类型的值
  // 返回值
  const res = await request({
    method: 'POST',
    url: '/users',
    // 请求体数据
    data
  })
  return res.data
}

// register({
//     user: {
//         username: 'string',
//         email: 'string',
//         password: 'string'
//     }
// }).then(data => {
//     console.log(data.user.username) // 输出res.xx的时候会有RegisterData内部定义的类型提示
// })
