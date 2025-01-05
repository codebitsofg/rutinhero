'use client'
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface TaskData {
  name: string
  total: number
  completed: number
}

interface TaskProgressChartProps {
  data: TaskData[]
}

export const TaskProgressChart: React.FC<TaskProgressChartProps> = ({
  data,
}) => {
  // Calculate total tasks and completed tasks
  const totalTasks = data.reduce((acc, curr) => acc + curr.total, 0)
  const completedTasks = data.reduce((acc, curr) => acc + curr.completed, 0)

  const chartData = [
    { name: 'Completed', value: completedTasks },
    { name: 'Remaining', value: totalTasks - completedTasks },
  ]

  const COLORS = ['#a855f7', '#94a3b8']

  return (
    <div className='bgur flex h-[100px] w-full items-end justify-end'>
      <div className='relative h-[100px] w-[100px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={chartData}
              cx='50%'
              cy='50%'
              innerRadius={30}
              outerRadius={40}
              fill='#8884d8'
              paddingAngle={0}
              dataKey='value'
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          <div className='font-dm text-sm font-bold text-gray-900'>
            {Math.round((completedTasks / totalTasks) * 100)}%
          </div>
        </div>
        <p className='text-center text-xs text-neutral-400'>Tamamlandı</p>
      </div>
    </div>
  )
}
