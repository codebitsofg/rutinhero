import { Info } from 'lucide-react'
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'

const genderData = [
  { name: 'Kadın', value: 53.63, color: '#EC4899' },
  { name: 'Erkek', value: 43.95, color: '#6366F1' },
  { name: 'Diğer', value: 2.42, color: '#F97316' },
]

const ageData = [
  { age: '18-24', value: 12.29 },
  { age: '25-34', value: 31.66 },
  { age: '35-44', value: 44.88 },
  { age: '45-54', value: 13.7 },
]

export const CreatorAudience = () => (
  <div className='p-6'>
    <h2 className='mb-8 text-3xl font-medium'>Audience</h2>

    <div className='space-y-12'>
      {/* Gender Split */}
      <div>
        <div className='mb-4 flex items-center gap-1'>
          <h3 className='text-sm text-neutral-500'>Gender Distribution</h3>
          <Info className='h-4 w-4 text-neutral-400' />
        </div>
        <div className='flex items-center gap-8'>
          <div className='h-48 w-48'>
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart>
                <Pie
                  data={genderData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey='value'
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='space-y-2'>
            {genderData.map((item) => (
              <div key={item.name} className='flex items-center gap-2'>
                <div
                  className='h-3 w-3 rounded-full'
                  style={{ backgroundColor: item.color }}
                />
                <span className='text-sm'>{item.name}</span>
                <span className='text-sm font-medium'>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Age Split */}
      <div>
        <div className='mb-4 flex items-center gap-1'>
          <h3 className='text-sm text-neutral-500'>Age Distribution</h3>
          <Info className='h-4 w-4 text-neutral-400' />
        </div>
        <div className='h-48'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={ageData}>
              <XAxis
                dataKey='age'
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis hide={true} />
              <Bar dataKey='value' fill='#6366F1' radius={[4, 4, 4, 4]}>
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`}>
                    <text
                      x={0}
                      y={0}
                      dy={-8}
                      fill='#374151'
                      textAnchor='middle'
                      fontSize={12}
                    >
                      {`${entry.value}%`}
                    </text>
                  </Cell>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
)
