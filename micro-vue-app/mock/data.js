module.exports = [
  {
    url: '/projects/',
    method: 'get',
    data: {
      code: 0,
      data: {
        count: 100,
        results: [
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          },
          {
            id: 1,
            name: 'name',
            finish_time: 'finish_time',
            real_scene: 'real_scene',
            software: 'software',
            sim_scene: 'sim_scene',
            params_name: 'params_name'
          }
        ]
      }
    }
  },
  {
    url: '/projects/dict/scenes/',
    method: 'get',
    data: {
      code: 0,
      data: [
        {
          name: '限速标志',
          params: ['试验车速度', '试验车加速度']
        },
        {
          name: '弯道',
          params: ['试验车速度1', '试验车加速度1']
        },
        {
          name: '快速路车道信号灯',
          params: ['试验车速度2', '试验车加速度2']
        }
      ]
    }
  },
  {
    url: '/projects/',
    method: 'post',
    data: {
      code: 0,
      data: {
        id: 1
      }
    }
  },
  {
    url: '/projects/1/',
    method: 'get',
    data: {
      code: 0,
      data: {
        id: 1,
        name: '项目名',
        real_scene: '顺义封闭场',
        software: 'Sim Pro',
        sim_scene: '仿真场景-直路',
        scene_params: [
          {
            id: '1',
            name: '速度',
            group_count: 2,
            groups: [
              {
                id: 330,
                real_car: true,
                name: '实车',
                title: 'real_car_speed',
                indicators: []
              },
              {
                id: 331,
                real_car: false,
                name: '对照组1',
                indicators: [1]
              },
              {
                id: 332,
                real_car: false,
                name: '对照组2',
                indicators: [2, 3]
              }
            ]
          },
          {
            id: '2',
            name: '加速度',
            group_count: 2,
            groups: [
              {
                id: 330,
                real_car: true,
                name: '实车',
                title: 'real_car_speed',
                indicators: []
              },
              {
                id: 331,
                real_car: false,
                name: '对照组1',
                indicators: [1]
              },
              {
                id: 332,
                real_car: false,
                name: '对照组2',
                indicators: [2, 3]
              }
            ]
          },
          {
            id: '3',
            name: '速度',
            group_count: 2,
            groups: [
              {
                id: 330,
                real_car: true,
                name: '实车',
                title: 'real_car_speed',
                indicators: []
              },
              {
                id: 331,
                real_car: false,
                name: '对照组1',
                indicators: [1]
              },
              {
                id: 332,
                real_car: false,
                name: '对照组2',
                indicators: [2, 3]
              }
            ]
          },
          {
            id: '4',
            name: '速度',
            group_count: 2,
            groups: [
              {
                id: 330,
                real_car: true,
                name: '实车',
                title: 'real_car_speed',
                indicators: []
              },
              {
                id: 331,
                real_car: false,
                name: '对照组11',
                indicators: [1]
              },
              {
                id: 332,
                real_car: false,
                name: '对照组22',
                indicators: [2, 3]
              }
            ]
          }
        ],
        preconditions: [
          {
            type: '传感器',
            items: [
              {
                id: 1,
                name: '传感器类型一致',
                value: 1
              },
              {
                id: 2,
                name: '仿真测试传感器正常输出数据',
                value: 1
              },
              {
                id: 3,
                name: '封闭场地传感器正常工作',
                value: 1
              }
            ]
          },
          {
            type: '静态场景',
            items: [
              {
                id: 4,
                name: '道路类型一致',
                value: 1
              },
              {
                id: 5,
                name: '交通标线类型一致',
                value: 1
              },
              {
                id: 6,
                name: '交通标志类型一致',
                value: 1
              },
              {
                id: 7,
                name: '道路设施等元素一致',
                value: 1
              }
            ]
          },
          {
            type: '动态场景',
            items: [
              {
                id: 440,
                name: '行人元素一致',
                value: 1
              },
              {
                id: 441,
                name: '非机动车元素一致',
                value: 1
              },
              {
                id: 442,
                name: '障碍物元素一致',
                value: 1
              },
              {
                id: 443,
                name: '光照强度一致',
                value: 1
              },
              {
                id: 444,
                name: '天气元素一致等',
                value: 1
              }
            ]
          },
          {
            type: '被测车辆',
            items: [
              {
                id: 445,
                name: '自动驾驶软件版本一致',
                value: 1
              },
              {
                id: 446,
                name: '自动驾驶硬件版本一致',
                value: 1
              },
              {
                id: 447,
                name: '车辆动力学相关模型参数一致等',
                value: 1
              }
            ]
          }
        ]
      }
    }
  },
  {
    url: '/projects/result/',
    method: 'get',
    data: {
      code: 0,
      data: {
        id: 1,
        name: '项目名称',
        real_scene: '实车测试场地',
        software: '仿真测试软件',
        sim_scene: '仿真测试场景',
        finish_time: '完成时间',
        results: [
          {
            name: '参数名称',
            conclusion: '结论',
            groups_results: [
              {
                titles: '对照组数据列标题,对照组数据列标题',
                indicators_values: 'δ=0.01, S=100',
                indicators_results: 'δ满足,S不满足',
                figure: ''
              }
            ]
          },
          {
            name: '参数名称2',
            conclusion: '结论2',
            groups_results: [
              {
                titles: '对照组数据列标题,对照组数据列标题',
                indicators_values: 'δ=0.01, S=100',
                indicators_results: 'δ满足,S不满足',
                figure: ''
              },
              {
                titles: '对照组数据列标题,对照组数据列标题',
                indicators_values: 'δ=0.01, S=100',
                indicators_results: 'δ满足,S不满足',
                figure: ''
              }
            ]
          },
          {
            name: '参数名称3',
            conclusion: '结论3',
            groups_results: [
              {
                titles: '对照组数据列标题,对照组数据列标题',
                indicators_values: 'δ=0.01, S=100',
                indicators_results: 'δ满足,S不满足',
                figure: ''
              },
              {
                titles: '对照组数据列标题,对照组数据列标题',
                indicators_values: 'δ=0.01, S=100',
                indicators_results: 'δ满足,S不满足',
                figure: ''
              },
              {
                titles: '对照组数据列标题,对照组数据列标题',
                indicators_values: 'δ=0.01, S=100',
                indicators_results: 'δ满足,S不满足',
                figure: ''
              },
              {
                titles: '对照组数据列标题,对照组数据列标题',
                indicators_values: 'δ=0.01, S=100',
                indicators_results: 'δ满足,S不满足',
                figure: ''
              }
            ]
          }
        ]
      }
    }
  }
]
