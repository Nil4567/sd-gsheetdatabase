/**
 * Digital Clock - Multi Timezone Display
 */

class DigitalClock {
  constructor(config = {}) {
    this.timeZones = config.timeZones || [
      { name: 'IST', offset: 'Asia/Kolkata' },
      { name: 'UTC', offset: 'UTC' },
      { name: 'EST', offset: 'America/New_York' },
      { name: 'PST', offset: 'America/Los_Angeles' },
      { name: 'GST', offset: 'Asia/Dubai' },
      { name: 'SGT', offset: 'Asia/Singapore' }
    ];
    this.format = config.format || '24';
    this.updateInterval = config.updateInterval || 1000;
    this.running = false;
  }

  formatTime(timezone) {
    const date = new Date();
    const options = {
      timeZone: timezone,
      hour12: this.format === '12',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    return date.toLocaleString('en-US', options);
  }

  getDateInZone(timezone) {
    const date = new Date();
    return date.toLocaleString('en-US', {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }

  displayInContainer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const update = () => {
      let html = '<div class="clock-container">';
      this.timeZones.forEach(tz => {
        const time = this.formatTime(tz.offset);
        const date = this.getDateInZone(tz.offset);
        html += `<div class="timezone-block"><div class="timezone-label">${tz.name}</div><div class="timezone-time">${time}</div><div class="timezone-date">${date}</div></div>`;
      });
      html += '</div>';
      container.innerHTML = html;
    };

    update();
    if (!this.running) {
      this.running = true;
      setInterval(update, this.updateInterval);
    }
  }

  displayAsTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const update = () => {
      let html = '<table border="1" cellpadding="10" cellspacing="0" style="width:100%;"><thead><tr style="background-color:#333;color:white;"><th>Timezone</th><th>Time</th><th>Date</th></tr></thead><tbody>';
      this.timeZones.forEach(tz => {
        const time = this.formatTime(tz.offset);
        const date = this.getDateInZone(tz.offset);
        html += `<tr><td>${tz.name}</td><td>${time}</td><td>${date}</td></tr>`;
      });
      html += '</tbody></table>';
      container.innerHTML = html;
    };

    update();
    if (!this.running) {
      this.running = true;
      setInterval(update, this.updateInterval);
    }
  }

  addTimeZone(name, offset) {
    this.timeZones.push({ name, offset });
  }

  removeTimeZone(name) {
    this.timeZones = this.timeZones.filter(tz => tz.name !== name);
  }

  setFormat(format) {
    this.format = format;
  }
}
