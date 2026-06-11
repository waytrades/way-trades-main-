<template>
  <div class="flex items-center gap-2 px-4 py-2.5 bg-green-500/5 border border-green-500/20 rounded-xl">
    <template v-if="isLive">
      <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
      <span class="text-green-400 font-black text-xs uppercase tracking-wider">Live Now · 9:25 AM EST</span>
    </template>
    <template v-else>
      <span class="w-2 h-2 rounded-full bg-green-500/50 flex-shrink-0"></span>
      <span class="text-gray-400 text-xs font-medium">
        Next session
        <span class="text-green-400 font-black">{{ sessionLabel }}</span>
        <template v-if="showCountdown">
          &nbsp;·&nbsp;<span class="text-white font-black font-mono">{{ countdown }}</span>
        </template>
      </span>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const HOLIDAYS = new Set([
  '2025-01-01', '2025-01-20', '2025-02-17', '2025-04-18',
  '2025-05-26', '2025-06-19', '2025-07-04', '2025-09-01',
  '2025-11-27', '2025-12-25',
  '2026-01-01', '2026-01-19', '2026-02-16', '2026-04-03',
  '2026-05-25', '2026-06-19', '2026-07-03', '2026-09-07',
  '2026-11-26', '2026-12-25',
])

const SESSION_HOUR = 9
const SESSION_MIN = 25
const SESSION_END_MINS = 90
const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function getETNow() {
  const etStr = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
  return new Date(etStr)
}

function dateKey(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function isTradingDay(d) {
  const dow = d.getDay()
  return dow >= 1 && dow <= 5 && !HOLIDAYS.has(dateKey(d))
}

function nextSession(etNow) {
  const minNow = etNow.getHours() * 60 + etNow.getMinutes()
  const sessionStart = SESSION_HOUR * 60 + SESSION_MIN

  // If today is a trading day and session hasn't started — return today's session
  if (isTradingDay(etNow) && minNow < sessionStart) {
    const d = new Date(etNow)
    d.setHours(SESSION_HOUR, SESSION_MIN, 0, 0)
    return d
  }

  // Otherwise find the next trading day
  const d = new Date(etNow)
  d.setDate(d.getDate() + 1)
  d.setHours(SESSION_HOUR, SESSION_MIN, 0, 0)
  while (!isTradingDay(d)) {
    d.setDate(d.getDate() + 1)
  }
  return d
}

function formatMs(ms) {
  if (ms <= 0) return '00:00:00'
  const totalSec = Math.floor(ms / 1000)
  const h = Math.floor(totalSec / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60
  const pad = n => String(n).padStart(2, '0')
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`
}

const isLive = ref(false)
const sessionLabel = ref('...')
const countdown = ref('')
const showCountdown = ref(false)

function tick() {
  const etNow = getETNow()
  const minNow = etNow.getHours() * 60 + etNow.getMinutes()
  const sessionStart = SESSION_HOUR * 60 + SESSION_MIN

  // Check if currently live
  if (isTradingDay(etNow) && minNow >= sessionStart && minNow < sessionStart + SESSION_END_MINS) {
    isLive.value = true
    return
  }
  isLive.value = false

  const next = nextSession(etNow)

  // Work out label — use a fresh copy of etNow for midnight comparison
  const etMidnight = new Date(etNow)
  etMidnight.setHours(0, 0, 0, 0)
  const nextMidnight = new Date(next)
  nextMidnight.setHours(0, 0, 0, 0)
  const dayDiff = Math.round((nextMidnight - etMidnight) / 86400000)

  if (dayDiff === 0) {
    sessionLabel.value = 'today at 9:25 AM EST'
  } else if (dayDiff === 1) {
    sessionLabel.value = 'tomorrow at 9:25 AM EST'
  } else {
    sessionLabel.value = `${DAYS[next.getDay()]} at 9:25 AM EST`
  }

  // Show live countdown only if session is within 24h
  const msUntil = next - new Date()
  showCountdown.value = msUntil > 0 && msUntil < 86400000
  if (showCountdown.value) countdown.value = formatMs(msUntil)
}

let timer
onMounted(() => { tick(); timer = setInterval(tick, 1000) })
onUnmounted(() => clearInterval(timer))
</script>
