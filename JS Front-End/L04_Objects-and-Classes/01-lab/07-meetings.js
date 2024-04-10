function manageMeetings(meetings) {
    const meetingSchedule = {};
    const successfulMeetings = [];
    for (const meeting of meetings) {
      const [day, name] = meeting.split(' ');
      if (meetingSchedule[day]) {
        console.log(`Conflict on ${day}!`);
      } else {
        console.log(`Scheduled for ${day}`);
        meetingSchedule[day] = name;
        successfulMeetings.push(`${day} -> ${name}`);
      }
    }
    console.log(successfulMeetings.join('\n'));
  }
  